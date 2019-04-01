# bitBot_RC
Building a RC car from BBC micro:bits and a bit:bot

## Exercise 1 - Button Press

AIM: Drive the car forwards using a button on the controller

### Controller

- Need for different channels (groups)
- Why it’s nice to have feedback from controller
- Why do we need an else statement? What happens without it?

![Exercise 1 - Controller](/1_controller.jpg)

### Car

- Why should we specify a time? What happens without it? What happens when we change it?
- BONUS: Can you make it do a wheelie?

![Exercise 1 - Car](/1_car.jpg)

## Exercise 2 - Forward/Backward Tilt

AIM: Drive the car forwards and backwards using the accelerometer in the controller

### Controller

- Explain what an accelerometer is 
- Use the simulation in the IDE to understand direction and magnitude of acceleration value

![Exercise 2 - Controller](/2_controller.jpg)

### Car

- What happens near zero when driving the car? How could we improve this?

![Exercise 2 - Car](/2_car.jpg)

## Exercise 3 - All Directions Tilt!

AIM: Drive the car in all directions using the accelerometer in the controller

### Controller

- Give them the `show_directions()` function, by pasting in the relevant JS code and swapping back to blocks. Explain that it is a tedious bit to code, but a cool thing to have
![Exercise 3 - Controller](/3_controller.jpg)

### Car

- The values from the accelerometer are forward and right, but the motors on the BitBot are for the left and right wheels, so we have to do some maths to convert between these two systems
- There are two cases, forwards and backwards. In the two cases, left and right are swapped. Drawing diagrams here helps to explain what you mean


![Exercise 3 - Car](/3_car.jpg)

## Stretch goals

- Build in a threshold value (100 works well), so that small tilts don't have an effect which stops a lot of the juddering
- The steering is very sensitive, as with a normal car you want the left/right controls to be more sensitive than the forward/backward movements. This can be done by dividing the left/right values through by a constant (2 works well)
- Could you use the 12 LEDs on the BitBot to do something cool? 
