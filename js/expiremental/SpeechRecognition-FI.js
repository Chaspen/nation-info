if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
    annyang.setLanguage('fi')
    
  var commands = {
      'Ruotsi': function() { sweden(); },
      'Tanska': function() { denmark(); },
      'Norja': function() { norway(); },
      'Suomi': function() { finland(); },
      'Viro': function() { estonia(); },
      
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}