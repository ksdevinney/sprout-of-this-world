module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
    format_time: (time) => {
        //format time
        return time.toLocaleString();
    },
    //create random to randomize items 
    get_item: (my_items) => {
        //const randomItem = Math.random();

        // returns a random item
       let array_of_items = my_items[Math.floor(Math.random() * my_items.length)]
       return array_of_items;
    },
};