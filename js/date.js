var d = new Date();
        var month = d.getMonth()+1;
        var date = d.getDate()+"."+month+"."+d.getFullYear();
        document.getElementById('date').innerHTML = date;