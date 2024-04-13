## Title

Freak Search

## Description

Search Engine and Web API all in one for the entire archival records of the Freakonomics Podcast. This tool allows a user to find any topic, person, or quote from any Freakonomics podcast episode.

I created this because I found that I had a difficult time finding topics that were discussed in Freakonomics.

## Why?

I listen to Freakonomics every week, and often something I heard on the show enters my discussions with friends. In these discussions, I frequently found my self struggling to remember which episode I heard a quote or tidbit. This struggle has lead to me being inaccurate or providing inadequate sources. To solve this problem, I decide to build a web application that allows me to remember where I heard that interesting tidbit I want to share with friends.

## Devlog

This tool uses Python and Beautiful Soup 4 to scrape all of the transcripts, guests, sources, and hosts for each Freakonomics Podcast episode. It then indexes these items and stores them in a database. 

The Server logic is written in C# with RESTful API calls for hosts, guests, and episodes. LuceneNet is a Machine Learning library made for C#. I implemented it to make search results relevant to a user's given search terms. It allows for fuzzy searches and finds words or phrases related to a provided search term. 

The frontend is written in React JS with a Material UI component Library. I use Context to store hosts and guests on the front end to simplify the handling of state between different Hosts and Guest components.

I used Docker-Compose to containerize the application to make deployment a breeze. For a time I had it deployed with AWS on an ECS cluster, but I have taken it down to save on costs. It still run locally on my machine, and I use it when I want to find something on the podcast.

## Contributing

At this time, I have no specific elements that I am looking for contributions on. As development continues, that may change. If you have any suggestions or questions, please do not hesitate to reach out to me: DustinYansberg@gmail.com
