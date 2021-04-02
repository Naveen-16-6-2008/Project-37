class Question {
    constructor( ) {
      this . title = createElement( 'h1' )
this . input1 = createInput("Enter Your Name Here. ...");
this . input2 = createInput("Enter Correct Option No. .");
this . button = createButton( ' Submit' ) ;
this . question = createElement('h3' );

this . option1 = createElement( 'h4' ) ;
this . option2 = createElement( 'h4' ) ;

    }
  hide(){
    this . title. hide( ) ;

this . input1 . hide( ) ;
this. button. hide ( ) ;

this . input2. hide( ) ;

  }
display (){
this. title. html("MyQuiz Game");
this. title. position(350, 0);

this.question.html("Question: - what starts and ends with the letter 'E', but has only one letter? ")
this . question. position(150, 86);
this . option1. html("1: Everyone")
this . option1. position (150, 100);
this . option2. html("2: Envelope" )
this.  option2. position (150, 120);
this . input1. position(150, 230) ;
this.input2.position(350,230);
this.button.position(290,300);
this . button . mousePressed( ()=>{
this . title. hide() ;
this . input1. hide( );
this.input2.hide();
this . button . hide( ) ;
    contestant . name = this . input1 . value();
    contestant.name = this.input2.value();
    contestantCount+=1;
    contestant . index = contestantCount;
    contestant . update ( );
    contestant . updateCount (contestantCount) ;
    });
    
}

}