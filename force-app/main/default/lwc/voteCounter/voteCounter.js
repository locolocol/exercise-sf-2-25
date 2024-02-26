// YourComponent.js
import { LightningElement, track } from 'lwc';

export default class YourComponent extends LightningElement {
    @track teamOptions = [
        { label: 'Real Madrid', value: 'Real Madrid' },
        { label: 'Barcelona', value: 'Barcelona' },
        { label: 'Milan', value: 'Milan' }
    ];
    @track selectedTeamValue;
    @track showSurvey = false;
    @track showResults = false;
    @track realMadridVotes = 0;
    @track barcelonaVotes = 0;
    @track milanVotes = 0;
    @track voted = false;

    handleSelection(event) {
        this.selectedTeamValue = event.detail.value;
        this.showSurvey = true;
        // Disable the radio group to prevent changing the vote
        const radioGroup = this.template.querySelector('lightning-radio-group');
        radioGroup.disabled = true;
        // Reset the voted flag to enable voting again
        this.voted = false;
    }
    
    
    submitVote() {
        // Update the vote counts based on the selected team value
        if (this.selectedTeamValue === 'Real Madrid') {
            this.realMadridVotes++;
        } else if (this.selectedTeamValue === 'Barcelona') {
            this.barcelonaVotes++;
        } else if (this.selectedTeamValue === 'Milan') {
            this.milanVotes++;
        }
    
        // Set showResults to true to display the survey results
        this.showResults = true;
    
        // Set the voted flag to true to disable the "Vote" button
        this.voted = true;
    }
    
    voteAgain() {
        // Clear the selected team value
        this.selectedTeamValue = null;
    
        // Re-enable the radio group to allow voting again
        const radioGroup = this.template.querySelector('lightning-radio-group');
        radioGroup.disabled = false;
    
        // Reset the voted flag to allow voting again
        this.voted = false;
    
        // Set showSurvey to true to display the survey again
        this.showSurvey = true;
    
        // Set showResults to false to hide the survey results
        this.showResults = false;
     }
    
     get roundedPercentage() {
        return Math.round(this.calculatedRealMadridPercentage);
    }
    
    get calculatedRealMadridPercentage() {
        return this.calculatePercentage(this.realMadridVotes);
    }

    get calculatedBarcelonaPercentage() {
        return this.calculatePercentage(this.barcelonaVotes);
    }

    get calculatedMilanPercentage() {
        return this.calculatePercentage(this.milanVotes);
    }    

    calculatePercentage(votes) {
        const totalVotes = this.realMadridVotes + this.barcelonaVotes + this.milanVotes;
        return totalVotes === 0 ? 0 : (votes / totalVotes) * 100;
    }
    

}