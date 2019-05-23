
const cfg = require( './config' );
const pgp = require( 'pg-promise' )( );


const config = {
 host : cfg.host,
 user: cfg.user, //env var: PGUSER
 database: cfg.database, //env var: PGDATABASE
 password: cfg.password, //env var: PGPASSWORD
 port: cfg.port //env var: PGPORT
};

const client = pgp( config );

	function displayFullAlbum( data ) {
		console.log( data );
	}

	function getAlbumByTitle( title ) {
		client.one( `select alb.id, title, name from albums alb JOIN artists art 
			ON alb.artist_id = art.id where title = $1::text`, 
			[ title ] )
			.then( function ( data ) {
				const fullAlbum = { };
				fullAlbum[ 'album' ] = data;
				getTracksByAlbumId( data.id , fullAlbum );
				console.log( 'hello');
			})
			.catch( function ( error ) {
				console.log( 'Error occurred.' , error.message );
			});
	}

	function getTracksByAlbumId( id , fullAlbum ) {
		client.many( `select * from tracks where album_id=$1::int` , [ id] )
		.then( function( data ) {
			fullAlbum[ 'tracks' ] = data;
			displayFullAlbum( fullAlbum );
		})
		.catch( function ( error ) {
			console.log( 'No tracks found for this album ' , error );
		})
	}

	getAlbumByTitle( process.argv[ 2 ] );








