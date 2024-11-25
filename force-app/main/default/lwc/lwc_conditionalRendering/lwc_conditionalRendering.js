/**
 * @description       : 
 * @author            : Sangram Keshari Upadhyaya
 * @group             : 
 * @last modified on  : 15-09-2024
 * @last modified by  : Sangram Keshari Upadhyaya
 * Modifications Log
 * Ver   Date         Author                      Modification
 * 1.0   15-09-2024   Sangram Keshari Upadhyaya   Initial Version
**/
import { LightningElement } from 'lwc';

export default class Lwc_conditionalRendering extends LightningElement {

    /****** What are Directives ? ******/

    /*
    
    - Directives are special HTML attributes.
    - Directives always run on the template tags.
    - The LwC programming model has a few custom directives hat let us manipulate the DOM using the markup.

    In LwC we have 3 special directives for conditional rendering ::

    1. lwc:if
    2. lwc:elseif
    3. lwc:else

    */

    buttonClicked;
    isVisible = false;
    checkSecretPhrase;
    secretPhrase = 'Jai Hind!';

    ifButtonClicked = false;
    elseIfButtonClicked = false;
    elseButtonClicked = false;

    ifButtonSyntax = `<template lwc:if={expression}>Show me when expression is true.</template>`

    elseIfButtonSyntax = `<template lwc:elseif={expression}>Show me when expression is true.</template>`
    
    elseButtonSyntax = `<template lwc:else>Show me when expression is true.</template>`
    
    handleClick(evt){
        this.buttonClicked = evt.target.value;

        if(this.buttonClicked == 'if'){

            this.ifButtonClicked = true;
            this.elseIfButtonClicked = false;
            this.elseButtonClicked = false;
        
        }

        else if(this.buttonClicked == 'elseIf'){

            this.ifButtonClicked = false;
            this.elseIfButtonClicked = true;
            this.elseButtonClicked = false;
        
        }

        else if(this.buttonClicked == 'else') {

            this.ifButtonClicked = false;
            this.elseIfButtonClicked = false;
            this.elseButtonClicked = true;
            
        }

        else {

            this.ifButtonClicked = false;
            this.elseIfButtonClicked = false;
            this.elseButtonClicked = false;

        }

    }

    handleChange(){
        this.isVisible = !this.isVisible;
    }

    checkCorrectPhrase(evt){
        this.checkSecretPhrase = evt.target.value;   
    }

    get checkSecretPhraseMethod(){
        return this.checkSecretPhrase === this.secretPhrase;
    }

}