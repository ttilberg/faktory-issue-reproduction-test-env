# Redis-Based Faktory issue reproduction attempt

I am having issues with the Redis-backed beta of Faktory. See https://github.com/contribsys/faktory/issues/165

This project attempts to mimic the general project structure I have with the various worker types. Unfortunately it does not reproduce my issue, but perhaps will lead to more information about it anyway...

# To Run:

Launch the docker compose file to set up all of the services:

```
$ docker-compose up
```

Enqueue some jobs from a new shell

```
$ docker-compose exec rubyworker1 ruby -r ./worker.rb -e Project::Worker.enqueue
```
