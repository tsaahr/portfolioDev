public class Training {
    public String traineeName { get; set; }
    public Integer trainingHours { get; set; }

    // Constructor
    public Training(String name, Integer hours) {
        this.traineeName = name;
        this.trainingHours = hours;
    }

    // Method to display training details
    public void displayTrainingDetails() {
        System.debug('Trainee Name: ' + traineeName);
        System.debug('Training Hours: ' + trainingHours);
    }

    // Method to update training hours
    public void updateTrainingHours(Integer additionalHours) {
        this.trainingHours += additionalHours;
        System.debug('Updated Training Hours: ' + trainingHours);
    }
}