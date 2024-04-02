using Microsoft.AspNetCore.Mvc;
using freakSearch.Models;
using Microsoft.EntityFrameworkCore;

namespace freakSearch.Controllers;

// routes to /api/ControllerName/RouteName
//ex. /api/Episode/AllEpisodes
[Route("api/[controller]")]
[ApiController]
public class HostController : Controller
{
    private readonly ILogger<HostController> _logger;
    private MyContext _context;

    public HostController(ILogger<HostController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAllPresenters()
    {
        var presentersWithEpisodes = await _context.Presenters
            .Select(p => new
            {
                p.Id,
                p.Name,
                Episodes = _context.PresentedBys
                    .Where(pb => pb.PresenterId == p.Id)
                    .Select(pb => pb.Episode)
                    .ToList()
            })
            .ToListAsync();

        return Ok(presentersWithEpisodes);
    }

    [HttpGet("GetOne/{Id}")]
    public async Task<IActionResult> GetOnePresenter(int Id)
    {
        var presenter = await _context.Presenters
            .Where(p => p.Id == Id)
            .Select(p => new
            {
                p.Id,
                p.Name,
                Episodes = _context.PresentedBys
                    .Where(pb => pb.PresenterId == p.Id)
                    .Select(pb => pb.Episode)
                    .ToList()
            })
            .FirstOrDefaultAsync();

        return Ok(presenter);
    }
}