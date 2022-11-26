function AirplaneSeating(seats, no_of_passangers) {
  //   define seat row list
  var seat_column_list = [];
  var max_row = 0;
  for (var i = 0; i < seats.length; i++) {
    if (seats[i][1] > max_row) max_row = seats[i][1];
    var temp_seat_row = [];
    for (var j = 0; j < seats[i][1]; j++) {
      temp_seat_row[j] = [];
      for (var k = 0; k < seats[i][0]; k++) {
        temp_seat_row[j][k] = 0;
      }
    }
    seat_column_list.push(temp_seat_row);
  }

  passangers_counter = 1;

  // Aisle seat

  for (let i = 0; i < max_row; i++) {
    // for the first column
    if (i < seats[0][1]) {
      for (let j = 0; j < seats[0][0]; j++) {
        if (j == seats[0][0] - 1) {
          seat_column_list[0][i][seats[0][0] - 1] = passangers_counter;
          if (passangers_counter == no_of_passangers) return seat_column_list;
          passangers_counter += 1;
        }
      }
    }

    // for the middle columns
    for (let k = 1; k < seats.length - 1; k++) {
      if (i < seats[k][1]) {
        for (let j = 0; j < seats[k][0]; j++) {
          if (j == 0) {
            seat_column_list[k][i][0] = passangers_counter;
            if (passangers_counter == no_of_passangers) return seat_column_list;
            passangers_counter += 1;
          }
          if (j == seats[k][0] - 1) {
            seat_column_list[k][i][seats[k][0] - 1] = passangers_counter;
            if (passangers_counter == no_of_passangers) return seat_column_list;
            passangers_counter += 1;
          }
        }
      }
    }
    // for the last column
    if (i < seats[seats.length - 1][1]) {
      for (let j = 0; j < seats[seats.length - 1][0]; j++) {
        if (j == seats[seats.length - 1][0] - 1) {
          seat_column_list[seat_column_list.length - 1][i][0] =
            passangers_counter;
          if (passangers_counter == no_of_passangers) return seat_column_list;
          passangers_counter += 1;
        }
      }
    }
  }

  // Windows seat

  for (let i = 0; i < max_row; i++) {
    // for the first column
    if (i < seats[0][1]) {
      for (let j = 0; j < seats[0][0]; j++) {
        if (j == seats[0][0] - 1) {
          seat_column_list[0][i][0] = passangers_counter;
          if (passangers_counter == no_of_passangers) return seat_column_list;
          passangers_counter += 1;
        }
      }
    }
    // for the last column
    if (i < seats[seats.length - 1][1]) {
      for (let j = 0; j < seats[seats.length - 1][1]; j++) {
        if (j == seats[seats.length - 1][1] - 1) {
          seat_column_list[seat_column_list.length - 1][i][
            seats[seats.length - 1][0] - 1
          ] = passangers_counter;
          if (passangers_counter == no_of_passangers) return seat_column_list;
          passangers_counter += 1;
        }
      }
    }
  }

  // Middle	seat

  for (let i = 0; i < max_row; i++) {
    // for the middle columns
    for (let k = 0; k < seats.length; k++) {
      if (i < seats[k][1]) {
        for (let j = 0; j < seats[k][0]; j++) {
          if (j != seats[k][0] - 1 && j != 0) {
            seat_column_list[k][i][j] = passangers_counter;
            if (passangers_counter == no_of_passangers) return seat_column_list;
            passangers_counter += 1;
          }
        }
      }
    }
  }

  return seat_column_list;
}

const seats = [
  [3, 2],
  [4, 3],
  [2, 3],
  [3, 4],
];

const no_of_passangers = 30;

const result = AirplaneSeating(seats, no_of_passangers);
result.forEach((seats) => {
  seats.forEach((column) => {
    print(column);
  });
  print("---------");
});

function print(massage) {
  console.log(massage);
}
