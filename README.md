# My Personal Training Catalog

This app utilizes React and Ruby to keep track of a trainers clients and weekly routines.

## Installation

1. To access the functionality of this app, you will need to fork and clone the back end repositiory from [here](https://github.com/tred237/phase-3-sinatra-react-project). (The instructions to get this working is located in the repo's README)

2. After setting up the back-end, you need to fork this repository
   
![image](https://user-images.githubusercontent.com/103388556/189546584-8ec5fef7-4d7d-4c47-ae6b-f6e6ae834a69.png)
  
![image](https://user-images.githubusercontent.com/103388556/189546761-f0f05411-1967-46c7-b081-063bc6951ae0.png)

3. Copy the SSH key from the forked repository.

![image](https://user-images.githubusercontent.com/103388556/189546817-4d32dcbb-e79e-4220-8fc2-c573d21e9cc1.png)
  
4. In your terminal, clone the repository using the SSH key you copied from the fork.
```
git clone <pasted-ssh-key>
```
5. Navigate to the root of the cloned repository and install dependancies
```
cd my-app-frontend
npm install
```

## Usage

1. Start up the back-end of the app. Instructions on how to do this are located in the Usage sections, [here](https://github.com/tred237/phase-3-sinatra-react-project)
	
2. In another terminal window, navigate to the the root of your front-end repository and start the app. You will likely be asked if you want to run the app on a different port. If so, enter `y`.
```
cd my-app-frontend
npm start
```
<img width="452" alt="image" src="https://user-images.githubusercontent.com/103388556/200952535-9497418b-0074-45aa-815b-e180bf663bd7.png">

<img width="352" alt="image" src="https://user-images.githubusercontent.com/103388556/200953293-64f7d6ed-c1ad-479b-8639-a828afd90ccc.png">

3. If you successfully launched the app, a new window with the front-end should be created and you should see the app's home page.

<img width="1512" alt="image" src="https://user-images.githubusercontent.com/103388556/217716411-6fac3b47-f861-4379-a8b0-5bdd54b06dbf.png">

4. To see a catalog of your current clients, click the "View Clients" button and you should see the "Clients" page below:

<img width="1510" alt="image" src="https://user-images.githubusercontent.com/103388556/217716525-3558551c-d44c-4b46-9d30-bb4d606a5cd7.png">

5. You can new clients to your catalog by hitting the "Add Client" button, followed by filling out the form and clicking the "Submit" button.

<img width="192" alt="image" src="https://user-images.githubusercontent.com/103388556/217716575-f0973be9-0ec4-4ece-b454-daed0b686eaa.png">

<img width="463" alt="image" src="https://user-images.githubusercontent.com/103388556/217716631-de58d60d-5fc0-4bae-9c8e-7ae9ce1de8bd.png">

6. If you want to change a client's name or delete that client from your catalog, click the "Edit" button on that client's card. 

<img width="166" alt="image" src="https://user-images.githubusercontent.com/103388556/217716709-abc6b612-26a2-453c-8ef7-352480b6c7b6.png">

<img width="169" alt="image" src="https://user-images.githubusercontent.com/103388556/217716796-93704bb8-d530-4ab3-aa93-c377e0c18f41.png">

7. If you want to view the workout routines associated with a client, click the "Routine" button on that client's card and you should be routed to that client's Routine page

<img width="166" alt="image" src="https://user-images.githubusercontent.com/103388556/217716745-01c7414f-3d39-4779-83e0-31293bc0650c.png">

<img width="1192" alt="image" src="https://user-images.githubusercontent.com/103388556/217716919-f549d133-bd20-4bfe-83dc-491671932bdc.png">

8. If you want to add a new workout routine for a client, click on the "Add Routine" button, and you will be presented with a form to add a routine.

<img width="364" alt="image" src="https://user-images.githubusercontent.com/103388556/217716973-727b0763-15c1-41df-a0c1-2dd589b8d1aa.png">

9. If you want to edit or delete an existing routine, click the "Edit" button on a routine's card and you will be presented with the ability to edit or delete the routine.

<img width="266" alt="image" src="https://user-images.githubusercontent.com/103388556/217717120-007f591c-4067-4d48-858c-08e78ba65c77.png">

10. If you want to go back to your clients catalog, click on the "View Clients" button

<img width="167" alt="image" src="https://user-images.githubusercontent.com/103388556/217717165-746bfcff-8df9-40b3-8051-07710a77d1fc.png">

## Contributing

Contributions are welcome, but please open an issue first to discuss what you would like to change. If you fork the repository, please rememeber that this code is not meant to be monetizable or for commercial use.
