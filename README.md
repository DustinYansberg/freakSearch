# Title

## Freak Search

# Description

This is a Search Engine and Web API all-in-one for the entire archival records of the Freakonomics Podcast. This tool allows a user to find any topic, person, or quote from any Freakonomics podcast episode.

I created this because I found that I had a difficult time finding topics that were discussed in Freakonomics.

# Why?

I listen to Freakonomics every week, and often something I heard on the show enters my discussions with friends. In these discussions, I frequently found my self struggling to remember which episode I heard a quote or tidbit. This struggle has lead to me being inaccurate or providing inadequate sources. To solve this problem, I decide to build a web application that allows me to remember where I heard that interesting tidbit I want to share with friends.

# Demo

## Search

Searching for an episode is as easy as typing in the terms you are looking for. The server uses LuceneNet to search through an indexed form of the database and then serves a JSON element containing the top 20 most relevant results

![Search](https://github.com/DustinYansberg/freakSearch/assets/88344280/c7b4d17f-3d75-4570-888d-346441987d08)

From the results page, you can click on any result to be taken directly to the Freakonomics website where the episode transcript and audio is hosted. Pretty Neat!

### Typos
Your search term can even have typos, and the server logic will do its best to find the right results!

![Typo](https://github.com/DustinYansberg/freakSearch/assets/88344280/c83329dd-e566-4763-915d-6fa7b2f3a250)



## Hosts

Browse all of the people who have ever hosted an episode of Freakonomics. Click into a host to see their specific episodes!

![Hosts](https://github.com/DustinYansberg/freakSearch/assets/88344280/dbdb788c-d1f4-4799-9693-3c321bf69ef9)

## Guests

There are a ton of Guests, so I implemented Pagination on the guests page to keep the page clutter free

![Pagination](https://github.com/DustinYansberg/freakSearch/assets/88344280/cac93c2d-4867-4ad8-91be-eafb91184906)

# Python and Pandas and BeautifulSoup (Oh My!) 🎵

We used Python with Pandas and Beautiful Soup 4 to scrape all of the transcripts, guests, sources, and hosts for each Freakonomics Podcast episode and then import them into a SQL database.

BeautifulSoup4 and Pandas are insanely cool and powerful, though its tough to demonstrate without showing the code. So here is a gif of me scrolling through an early implementation of the .ipynb file:

![BeautifulSoup4](https://github.com/DustinYansberg/freakSearch/assets/88344280/f8f02dde-476c-4eb0-bb82-def6acb42011)

# Docker Docker Docker

We used Docker-Compose to containerize the application to make deployment a breeze. For a time we had it deployed with AWS on an ECS cluster, but we have taken it down to save on costs. It still run locally on my machine, and I use it when I want to find something on the podcast.

This mean that running it on your machine should be super simple, assuming you have Docker Desktop and Docker Engine installed. We'll discuss that in the next section


# How to Use

Before you begin, you need Docker installed. I have Docker version 25.0.3 installed on Windows 11.

- in a command line clone the git repo
`git clone https://github.com/DustinYansberg/freakSearch.git`

- once completed, cd into the repo
`cd freakSearch`

- now build with docker-compose!
`docker-compose up`

After a few minutes, the app should (hopefully) be running. Sometimes Docker-compose runs into an error with deploying the container because it tries to deploy the server before it finishes the database. If you get an error that mentions something about a the database being unhealthy, just redo the `docker-compose up` and you should be good to go.

- now with the app running you can open a browser and navigate to `http://localhost:44407`

and Voila! have fun!

Things aren't working yet? Feel free to reach out to me directly about it. `DustinYansberg@gmail.com`



## Other technical stuff

The Server logic is written in C# with RESTful API calls for hosts, guests, and episodes. LuceneNet is a Machine Learning library made for C#. We implemented it to make search results relevant to a user's given search terms. It allows for fuzzy searches and finds words or phrases related to a provided search term. 

The frontend is written in React JS with a Material UI component Library. I use Context to store hosts and guests on the front end to simplify the handling of state between different Hosts and Guest components.



# Contributing

At this time, I have no specific elements that I am looking for contributions on. As development continues, that may change. If you have any suggestions or questions, please do not hesitate to reach out to me: DustinYansberg@gmail.com
