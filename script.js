       alert ('Здравствуйте, Вы попали в игру "Угадай число" ')
       // Рандомно выбираем число от 1 до 100
        const correctNumber = Math.floor(Math.random() * 100) + 1;

        function checkGuess() {
            let userGuess = parseInt(document.getElementById('guessField').value);
            
            //Выдает сообщение о удачно или неудачно угаданным числом
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                message.textContent = 'Пожалуйста, введите число от 1 до 100.';
            }
            if (userGuess === correctNumber) {
                document.getElementById('message').innerHTML = `Поздравляю! Вы угадали число ${correctNumber}` ;
            } else if (userGuess < correctNumber) {
                document.getElementById('message').innerHTML = 'Попробуйте больше!';
            } else {
                document.getElementById('message').innerHTML = 'Попробуйте меньше!';
            }
      
        }
        //Шутка с убегающей кнопкой
        function runAway() {
            let button = document.getElementById('runaway-button');
            let newX = Math.floor(Math.random() * window.innerWidth);
            let newY = Math.floor(Math.random() * window.innerHeight);
            button.style.left = newX + 'px';
            button.style.top = newY + 'px';
          }

          
          