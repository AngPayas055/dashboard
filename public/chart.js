var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July','Aug','Sep','Oct','Nov','Dec'],
              datasets: [
                {
                  label: 'Income',
                  data: [550, 740, 510, 700, 712, 545,450, 700, 610, 740, 512, 245,],
                  backgroundColor: [
                      '#8282C8', 
                  ],
                  borderColor: [
                      '#8282C8',
                  ],
                  borderWidth: 0.5
              },
              {
                  label: 'Spending',
                  data: [310, 299, 180, 520, 160, 165,320, 580, 310, 340, 490, 190,],
                  backgroundColor: [
                      '#DFA9DD', 
                  ],
                  borderColor: [
                      '#DFA9DD',
                  ],
                  borderWidth: 0.5
              },

            ]
          },

          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });



      var ctx = document.getElementById('myChart-line');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July','Aug','Sep','Oct','Nov','Dec'],
              datasets: [
                {
                  label: 'Income',
                  data: [550, 740, 510, 700, 712, 545,450, 700, 610, 740, 512, 245,],
                  backgroundColor: [
                      '#8282C8', 
                  ],
                  borderColor: [
                      '#8282C8',
                  ],
                  borderWidth: 0.5
              },
              {
                  label: 'Spending',
                  data: [310, 299, 180, 520, 160, 165,320, 580, 310, 340, 490, 190,],
                  backgroundColor: [
                      '#DFA9DD', 
                  ],
                  borderColor: [
                      '#DFA9DD',
                  ],
                  borderWidth: 0.5
              },

            ]
          },

          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });


      var ctx = document.getElementById('myChart-radar');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July','Aug','Sep','Oct','Nov','Dec'],
              datasets: [
                {
                  label: 'Income',
                  data: [550, 740, 510, 700, 712, 545,450, 700, 610, 740, 512, 245,],
                  backgroundColor: [
                      '#8282C8', 
                  ],
                  borderColor: [
                      '#8282C8',
                  ],
                  borderWidth: 0.5
              },
              {
                  label: 'Spending',
                  data: [310, 299, 180, 520, 160, 165,320, 580, 310, 340, 490, 190,],
                  backgroundColor: [
                      '#DFA9DD', 
                  ],
                  borderColor: [
                      '#DFA9DD',
                  ],
                  borderWidth: 0.5
              },

            ]
          },

          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });