Psychiatry Clinic 

   <nav>

        <% if (user) { %>
    
    <a href="/logout">LOG OUT</a>

    <a href="/appointments">Appointment Scheduling</a> 

    <a href="/">Home</a> 
    
    <a href="/appointments/index"> View My Appointments</a> 

    <% } else { %>
        
    <a href="/auth/google" class="login">LOG IN</a> 
    <% } %>

    </nav>







    <form action="/providers/appointments/index/<%= appointment._id %>?_method=PUT" method="POST">
    <button type="submit">SUBMIT CHANGES</button>


















This will go in .ENV file
DATABASE_URL
mongodb+srv://Mig:<password>@cluster0.vcr6jdr.mongodb.net/?retryWrites=true&w=majority

WE USE THIS INSTEAD OF LOCAL HOST