describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75)
    })
  });

  it('Slider changes when volume input changes', () => {
  cy.get('#volume-slider').invoke('val', 33).trigger('input')
  cy.get('#volume-number').then($el => {
    expect($el).to.have.value(33)
  })
});

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33)
    })
  });

  // first part
  it('Tests if the image source changes when party horn radio button is selected', () => {
    cy.get('#radio-party-horn').check()
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg')    
    })
  });

  it('Tests if the sound source changes when party horn radio button is selected', () => {
    cy.get('#radio-party-horn').check()
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')    
    })
  });

  //second part 
  it('Tests if the volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')    
    })

    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')    
    })

    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')    
    })

    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')    
    }) 

    //changing volume slider
    cy.get('#volume-slider').invoke('val', 67).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')    
    })

     cy.get('#volume-slider').invoke('val', 66).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')    
    })

    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')    
    })

    cy.get('#volume-slider').invoke('val', 0).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')    
    })

  });

  //third
  it('Test if the honk button is disabled when the textbox input is a empty', () => {
    cy.get('#volume-number').clear()
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled', 'disabled')  
    })
  });

  it('Test if the honk button is disabled when the textbox input is a non number', () => {
    cy.get('#volume-number').clear().type("e");
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled', 'disabled')  
    })

    cy.get('#volume-number').clear().type("/");
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled', 'disabled')  
    })

    cy.get('#volume-number').clear().type("$");
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled', 'disabled')  
    })

    cy.get('#volume-number').clear().type("-");
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled', 'disabled')  
    })
  });

  //fourth
  it('last one', () => {
    cy.get('#volume-number').clear().type("101");
    cy.get('input:invalid').should('have.length', 1) // searching for one error

    cy.get('#volume-number').clear().type("-1");
    cy.get('input:invalid').should('have.length', 1) // searching for one error
  });
});



