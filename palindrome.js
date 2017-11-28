let word=document.querySelector('.word_wrapper');
let clicked=document.querySelector('.button_click');

word.addEventListener('input',palindromeCheck,false);
let input_array=[];

function palindromeCheck(event){
  event.preventDefault();
  input_array.pop();
  let x=event.target.value;
  let y=x.replace(/[^a-zA-Z0-9]/g, '');
  console.log(y);
  input_array.push(y);
}

clicked.addEventListener('click',checkIt,false);

function checkIt(){
  event.preventDefault();
  let reverse_array=[];
  if(input_array.length==1){
    let splitted_array=input_array[0].split('');
    for(i=splitted_array.length-1;i>=0;i--){

    reverse_array.push(splitted_array[i]);

    }

  let result_check=splitted_array.every(function(){
  let a=splitted_array.join().toLowerCase();
  let b=reverse_array.join().toLowerCase();

    return (a===b);
  });

  if(result_check==true)
  {
    document.querySelector('.result').innerHTML=`<b>YES, it is palindrome</b>`;
  }
else{
  document.querySelector('.result').innerHTML=`<b>No, it is not a palindrome</b>`;
}

  }
}
