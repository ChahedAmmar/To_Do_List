 // Fetch tasks from localStorage
 let alltodos = JSON.parse(localStorage.getItem('todos')) || [];

 function updateChart() {
     const completedCount = alltodos.filter(todo => todo.checked).length;
     const incompleteCount = alltodos.length - completedCount;

     taskChart.data.datasets[0].data = [completedCount, incompleteCount];
     taskChart.update();
 }

 // Create the task completion bar chart
 const ctx = document.getElementById('taskChart').getContext('2d');
 const taskChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['Completed', 'Incomplete'],
         datasets: [{
            label: 'Task Stats',
            data: [0, 0], // Initial data for completed and incomplete tasks
             backgroundColor: ['#4CAF50', '#FF5733'],
             borderColor: ['#388E3C', '#C62828'],
             borderWidth: 1
         }]
     },
     options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    font: {
                        size: 14,
                        family: 'Roboto',
                    },
                    color: '#000'
                }
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeOutBounce'
        }
    }
});
 

 // Update chart data
 updateChart();