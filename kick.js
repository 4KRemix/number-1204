function kickUser(username){
    var users = turntable.topViewController.users;
    for (var userId in users){
        if (users[userId].name == username){
            ROOMMANAGER.callback('boot_user',userId);
        }
    }
};
