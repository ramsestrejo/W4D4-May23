

function multiply( op1 , op2 ) {
	try {
		if( !op1 ) {
			throw new Error( "First operand is not valid" );
		}
		if( !op2 ) {
			throw new Error( "Second operand is not valid" );
		}	
		return op1 * op2;
	}
	catch( error ) {
		console.log( 'Something happened' , error.name , error.message)
	}

}

function divide( op1 , op2 ) {
	if ( op2 === '0' ) {
		throw new Error( "Divide by 0 is not allowed." );
	}
	return op1 / op2;
}

try {
	const operand1 = process.argv[ 2 ];
	const operand2 = process.argv[ 3 ];

	console.log( multiply( operand1, operand2 ) );
	console.log( divide( operand1 , operand2 ) );
}
catch( error ) {
	console.log( 'A critical error occurred. ' , error );
}
	finally {
		console.log( 'happens anyway')
	}


