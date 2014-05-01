get '/' do
  @tweet = Tweet.random_tweet
  erb :index
end

post '/' do 
	@tweet = Tweet.random_tweet
	@tweet.to_json
end
