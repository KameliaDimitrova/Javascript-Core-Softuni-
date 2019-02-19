function solve() {
	let buttons=Array.from(document.getElementsByTagName('button'));
	let inputTextArea=Array.from(document.getElementsByTagName('textarea'));
	buttons[0].addEventListener('click',encode);
	buttons[1].addEventListener('click',decode);
	function encode(){
		
				let message=inputTextArea[0].value;	
				let ecodedMessage="";
				for(let i=0;i<message.length;i++)
				{
					let currAsciiChar=message.charCodeAt(i);					
					ecodedMessage+=String.fromCharCode(currAsciiChar+1);
				}
				inputTextArea[1].value=ecodedMessage;
				inputTextArea[0].value="";
			}
	function decode()
	{
				let receiveMessage=inputTextArea[1].value;
				let decodedMessage="";
				for(let i=0;i<receiveMessage.length;i++)
				{
					let currAsciiChar=receiveMessage.charCodeAt(i);					
					decodedMessage+=String.fromCharCode(currAsciiChar-1);
				}
				inputTextArea[1].value=decodedMessage;
			}
		}
