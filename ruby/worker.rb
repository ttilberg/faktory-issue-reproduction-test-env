require 'faktory_worker_ruby'
require 'digest' # needed to fix https://github.com/contribsys/faktory_worker_ruby/issues/24

module Project
  class Worker
    include Faktory::Job

    def self.enqueue
      1000.times do |i|
        set(queue: %w[one two].sample).perform_async "Hey, hey! Check 1, #{i}"
      end
    end

    def perform msg
      puts "Ruby says: #{msg}"
    end
  end
end
