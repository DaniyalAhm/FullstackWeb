document.addEventListener("DOMContentLoaded", function() {
    const calendarContainer = document.getElementById("calendar-container");

    function generateCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDayOfWeek = firstDay.getDay();

        // Clear previous calendar
        calendarContainer.innerHTML = "";

        // Create day labels (Sun, Mon, Tue, etc.)
        const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        dayLabels.forEach(label => {
            const dayLabel = document.createElement("div");
            dayLabel.classList.add("day");
            dayLabel.textContent = label;
            calendarContainer.appendChild(dayLabel);
        });

        // Fill in the calendar with days
        for (let day = 1; day <= daysInMonth; day++) {
            const calendarDay = document.createElement("div");
            calendarDay.classList.add("day");
            calendarDay.textContent = day;

            // Highlight today's date
            if (year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate()) {
                calendarDay.classList.add("today");
            }

            calendarContainer.appendChild(calendarDay);
        }
    }

    // Example: Generate calendar for the current month
    const currentDate = new Date();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});
