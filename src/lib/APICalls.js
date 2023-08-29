let callURL;
callURL = "/api/";

export const APICheckEmail = async (email) => {
  try {
    console.log("ApiCall");
    const fetching = await fetch("/api/user/check/" + email);
    const response = await fetching.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APICreateUser = async (email, password) => {
  try {
    const fetching = await fetch(callURL + "user", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name: "User",
        hasCreatedRoom: false,
      }),
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIGetToken = async (email, password) => {
  try {
    const fetching = await fetch(callURL + "auth/token", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const response = await fetching.json();
    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APICreateChatroom = async (email, token) => {
  try {
    const fetching = await fetch(callURL + "createRoom", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email }),
    });
    const response = await fetching.json();
    return response.roomCreated.roomId;
  } catch (error) {
    console.error(error);
  }
};

export const APIGetRoomRealtimeID = async (roomId) => {
  try {
    const fetching = await fetch(callURL + "getRoomId", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomId }),
    });
    const response = await fetching.json();
    console.log(JSON.stringify(response) + " response de get in room");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIGetRoomsIDs = async (email) => {
  try {
    const fetching = await fetch(callURL + "myRooms", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const response = await fetching.json();
    return response.roomIds;
  } catch (error) {
    console.error(error);
  }
};

export const APIGetGuestRoomsIDs = async (email) => {
  try {
    const fetching = await fetch(callURL + "myGuestRooms", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const response = await fetching.json();
    return response.roomIds;
  } catch (error) {
    console.error(error);
  }
};

export const APISetImGuest = async (email, chatroomID, roomId) => {
  try {
    const fetching = await fetch(callURL + "guestRoom", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatroomID,
        email,
        roomId,
      }),
    });
    const response = await fetching.json();
    return response.roomIds;
  } catch (error) {
    console.error(error);
  }
};

export const APISendMessage = async (message, token) => {
  try {
    const fetching = await fetch(callURL + "message", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(message),
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
  return message;
};

export const APIGetUserMe = async (email, token) => {
  try {
    const fetching = await fetch(callURL + "me", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email }),
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIDeleteChatroom = async (roomID, token) => {
  try {
    const fetching = await fetch(callURL + "deleteRoom?roomId=" + roomID, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIDeleteAccount = async (token) => {
  try {
    const fetching = await fetch(callURL + "deleteAccount", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIUpdateUserData = async (token, email, newData) => {
  try {
    const fetching = await fetch(callURL + "meUpdate", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email, newData }),
    });
    console.log({ email, newData });

    const response = await fetching.json();
    console.log("response" + " " + JSON.stringify(response));

    return response;
  } catch (error) {
    console.error(error);
  }
};
