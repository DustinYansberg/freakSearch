using Microsoft.AspNetCore.Mvc;
using freakSearch.Models;
using Microsoft.EntityFrameworkCore;

namespace freakSearch.Controllers;

// routes to /api/ControllerName/RouteName
//ex. /api/Episode/AllEpisodes
[Route("api/[controller]")]
[ApiController]
public class GuestController : Controller
{
    private readonly ILogger<GuestController> _logger;
    private MyContext _context;

    public GuestController(ILogger<GuestController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAllGuests()
    {
        var guestsWithEpisodes = await _context.Guests
            .Select(g => new
            {
                Guest = g,
                Episodes = _context.GuestsofEpisodes
                    .Where(pb => pb.GuestId == g.Id)
                    .Select(pb => pb.Episode)
                    .ToList()
            })
            .ToListAsync();

        return Ok(guestsWithEpisodes);
    }
}