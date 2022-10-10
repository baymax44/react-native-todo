# Todo List by React Native

![Simulator Screen Recording - iPhone 14 Pro Max - 2022-10-10 at 01 22 22](https://user-images.githubusercontent.com/77080974/194803180-d458ea05-fda2-4d4e-b1f2-d75a887e9d87.gif)


- [How to Run](#how-to-run)
- [Expected behaviors](#expected-behaviors)

## How to Run

- run the ios simulator (Xcode should be installed to run the simulator)

- run the following scripts in terminal
```
# to setup dependencies
yarn install

# to run the project on the iOS simulator
yarn ios

# to run the project on the android simulator
yarn android
```

## Expected behaviors

### Task list

It will fetch existing tasks and will show the list of them on the screen, if there is no task, it will show "No task to show".

### Add new task

There is the input field at the bottom along with the plus button. you can input the task summary there and click the plus button to add a new task.

### Delete task

If you long-press the item of the list which you want to delete, it will show the alert popup. if you click on the "OK" button, that task will be removed.

### Mark the task as done

If you click the item, they will be marked as done.
