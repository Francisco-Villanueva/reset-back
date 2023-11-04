function generateTimeSlotsByHour(startTime, endTime) {
  const timeSlots = [];

  // Convert the time slots into date objects for easier manipulation
  const start = new Date(`2000-01-01 ${startTime}`);
  const end = new Date(`2000-01-01 ${endTime}`);

  // Iterate through each hour between the start and end times
  let currentHour = start;
  while (currentHour <= end) {
    // Format the current hour in the desired format
    const formattedHour = currentHour.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    timeSlots.push(`${formattedHour}`);

    // Add an hour for the next iteration
    currentHour.setHours(currentHour.getHours() + 1);
  }

  return timeSlots;
}

module.exports = {
  generateTimeSlotsByHour,
};
