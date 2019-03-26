# bitBot_RC
Building a RC car from BBC micro:bits and a bit:bot

## Exercise 1 - Button Press

AIM: Drive the car forwards using a button on the controller

### Controller

- Need for different channels (groups)
- Types of information to send (string, number, key-value pair)
- Why it’s nice to have feedback from controller
- Why do we need an else statement? What happens without it?

### Car

- Why should we specify a time? What happens without it? What happens when we change it?
- BONUS: Can you make it do a wheelie?

## Exercise 2 - Forward/Backward Tilt

AIM: Drive the car forwards and backwards using the accelerometer in the controller

### Controller

- Explain what an accelerometer is 
- Use the simulation in the IDE to understand direction and magnitude of acceleration value

### Car

- What happens near zero when driving the car? How could we improve this?

## Exercise 3 - All Directions Tilt!

AIM: Drive the car in all directions using the accelerometer in the controller

### Controller

- Explain what an accelerometer is 
- Use the simulation in the IDE to understand direction and magnitude of acceleration value

### Car

- Can this be rewritten using the BitBot motor functions rather than pins?
- What is this like without the threshold?
- Could we give them a fancy LED function too?
- Steering coefficient is a nice to have, leave it out for now?
- Maybe use forward and right, instead of left, as they are normal Cartesian values?
- Swap sign values in the controller to be more intuitive and helpful during debugging

There are two cases, forwards and backwards. In the two cases, left and right are swapped. Maybe it’s easier to just do the forward case for now? Or don’t talk about the second, backward case and then let them find it out for themselves and discuss it and maybe fix it as a stretch goal.