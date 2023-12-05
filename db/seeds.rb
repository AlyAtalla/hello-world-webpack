Message.destroy_all

greetings = [
  'Hello, World!',
  'Welcome to the app!',
  'Greetings from Rails!',
  'Hola, amigos!',
  'Good day to you!'
]

greetings.each do |greeting|
  Message.create(content: greeting)
end
