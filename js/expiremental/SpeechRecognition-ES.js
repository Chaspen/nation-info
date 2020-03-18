if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
    annyang.setLanguage('es-US')
    
  var commands = {
      'Suecia': function() { sweden(); },
      'Dinamarca': function() { denmark(); },
      'Noruega': function() { norway(); },
      'Finlandia': function() { finland(); },
      'Estonia': function() { estonia(); },
      
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}