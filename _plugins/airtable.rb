require 'json'
require 'airtable'
require 'active_support/all'
# require 'active_support/all'

logger = Logger.new("my_log.txt")

# Pass in api key to client
@client = Airtable::Client.new("key5BWaBb5FCx5sjD")

# Pass in the app key and table name

@table = @client.table("appu6bc56WwPum78l", "tblkwwvVoKTcuLqvV")
@records = @table.records
logger.info(@table)

# Change the filename here below but make sure it's in the _data folder.
File.open("_data/airtable_volunteer.json", "w") do |f|
    data = @records.map { |record| record.attributes }
    f.write(data.to_json)
end