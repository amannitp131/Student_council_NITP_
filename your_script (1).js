document.addEventListener('DOMContentLoaded', function () {
    // Sample data (replace with your actual data)
    var complaintData = {
        labels: ['Academics', ', Hostel facilities', 'Mess food', 'Hostel rooms','Interactions with faculty members'],
        datasets: [{
            label: 'Number of Complaints',
            backgroundColor: 'red(75, 192, 192, 0.2)',
            borderColor: 'red(75, 192, 192, 1)',
            borderWidth: 1,
            data: [90, 115, 17, 62, 18]
        }]
    };

    // Create a bar chart
    var ctx = document.getElementById('complaintChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: complaintData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});