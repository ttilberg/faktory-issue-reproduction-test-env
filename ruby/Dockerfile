from ruby:2.4

workdir /usr/src/app

copy Gemfile* ./
run bundle
copy . .

cmd bundle exec faktory-worker -r ./worker.rb