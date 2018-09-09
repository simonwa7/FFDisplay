import { Component, OnInit } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
	title = 'ffdrafter-display';
	sort_value = "First";
	filter_value = "";
	players = [
			new Player("Tyrod", "Taylor", "QB", "Cle", 406.345, 0.45, 21.12),
			new Player("Baker", "Mayfield", "QB", "Cle", 52.523, 4.23, 5.22),
			new Player("Jarvis", "Landry", "WR", "Cle", 154.21, -.98, 78.26),
			new Player("Josh", "Gordon", "WR", "Cle", 4200.345, 4.20, 99.12),
			];
	all_players = this.players;
	private fileText;


	ngOnInit(){
		this.players.sort( function(player1, player2) {
			if ( player1.first < player2.first ){
				return -1;
			}else if( player1.first > player2.first ){
				return 1;
			}else{
				return 0;	
			}
		});
	}

	sort_first(){
		this.sort_value = "First";
		this.players.sort( function(player1, player2) {
			if ( player1.first < player2.first ){
				return -1;
			}else if( player1.first > player2.first ){
				return 1;
			}else{
				return 0;	
			}
		});
	}

	sort_last(){
		this.sort_value = "Last";
		this.players.sort( function(player1, player2) {
			if ( player1.last < player2.last ){
				return -1;
			}else if( player1.last > player2.last ){
				return 1;
			}else{
				return 0;	
			}
		});
	}

	sort_pos(){ 
		this.sort_value = "Position";
		this.players.sort( function(player1, player2) {
			if ( player1.pos < player2.pos ){
				return -1;
			}else if( player1.pos > player2.pos ){
				return 1;
			}else{
				return 0;	
			}
		});
	}

	sort_team(){
		this.sort_value = "Team";
		this.players.sort( function(player1, player2) {
			if ( player1.team < player2.team ){
				return -1;
			}else if( player1.team > player2.team ){
				return 1;
			}else{
				return 0;	
			}
		});
	}

	sort_proj_ppg(){
		this.sort_value = "proj_ppg";
		this.players.sort( function(player1, player2) {
			if ( player1.proj_ppg > player2.proj_ppg ){
				return -1;
			}else if( player1.proj_ppg < player2.proj_ppg ){
				return 1;
			}else{
				return 0;	
			}
		});
	}

	sort_risk(){
		this.sort_value = "Risk";
		this.players.sort( function(player1, player2) {
			if ( player1.risk < player2.risk ){
				return -1;
			}else if( player1.risk > player2.risk ){
				return 1;
			}else{
				return 0;	
			}
		});
	}

	sort_pos_value(){
		this.sort_value = "pos_value";
		this.players.sort( function(player1, player2) {
			if ( player1.pos_value > player2.pos_value ){
				return -1;
			}else if( player1.pos_value < player2.pos_value ){
				return 1;
			}else{
				return 0;	
			}
		});
	}

	filter(position){
		if(position == 'QB'){
			this.players = this.all_players.filter(this.qbs);
			this.filter_value = "QB";
		}else if(position == 'WR'){
			this.players = this.all_players.filter(this.wrs);
			this.filter_value = "WR";
		}else if(position == 'RB'){
			this.players = this.all_players.filter(this.rbs);
			this.filter_value = "RB";
		}else if(position == 'TE'){
			this.players = this.all_players.filter(this.tes);
			this.filter_value = "TE";
		}else if(position == 'DEF'){
			this.players = this.all_players.filter(this.defs);
			this.filter_value = "DEF";
		}else if(position == 'K'){
			this.players = this.all_players.filter(this.ks);
			this.filter_value = "K";
		}
	}

	filter_by_pos(position){
		this.players = this.players.filter(this.qbs);
	}

	qbs(element, index, array){
		return (element.pos === 'QB')
	}

	wrs(element, index, array){
		return (element.pos === 'WR')
	}

	rbs(element, index, array){
		return (element.pos === 'RB')
	}

	tes(element, index, array){
		return (element.pos === 'TE')
	}

	defs(element, index, array){
		return (element.pos === 'DEF')
	}

	ks(element, index, array){
		return (element.pos === 'K')
	}

	fileUpload(event) {
		var reader = new FileReader();
		reader.readAsText(event.target.files[0]);
		var me = this;

		reader.onload = function () {
			console.log(reader)
			me.fileText = reader.result;
		}
	}
}
