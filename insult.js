
 function rand(Array){
    
     return Array[Math.floor(Math.random() * Array.length)];
 }
function insult(ping) {
    
         var taggedUser = ping;
 
            var categoryInsults = ["mum", "characteristic", "satire"];
			var decision = rand(categoryInsults);
            if (decision === "mum") {
                var yourMumJokes = ["is so fat they takes selfies in panoramic mode.", "is so ugly their own portraits hang themselves", "is so stupid they got hit by a parked car", "is so stupid they locked themselves in a grocery store and starved to death", "is so stupid they took two hours to watch sixty minutes", "'s cooking tastes so bad the flies shut the frickin window", "is so classless they are a Marxist utopia", "is so old that I told them to act their own age and they died"];
                
            } else if (decision === "characteristic"){
                var bodyParts = ["nose","dick"]
            
            } else if (decision === "satire"){ 
            }
} 
