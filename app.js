  var addressBook = (function() {

    var people = [{
      firstName: 'Omran',
      lastName: 'Abazid',
      phone: '33026620'
    }, {
      firstName: 'Ahmad',
      lastName: 'kenia',
      phone: '3225465'
    }];

    //cash the dom
    var table = $('#table1');
    var tbody = table.find('tbody');
    var $firstName = table.find('#firstName');
    var $lastName = table.find('#lastName');
    var $phone = table.find('#phone');
    var $button = table.find('#add');
    var $deleteButton = document.getElementById('#remove');

    //bind events
    $button.on('click', addPerson);
    table.on('click','#remove', deletePerson);
    _render();
    
    
    //render
    function _render() {
      tbody.html('');
      var length=people.length;
      for (var i=0;i<length;i++) {
        table.prepend('<tr><td>'+people[i].firstName+'</td><td>'+people[i].lastName+'</td><td>'+people[i].phone+'</td><td> <button id="remove" class="btn btn-block">X</button></td></tr>');
      }
    }
    
    //custom function
    function addPerson() {
      var person= {
      firstName: $firstName.val(),
      lastName: $lastName.val(),
      phone: $phone.val()
      };
      people.push(person);
      $firstName.val('');
      $lastName.val('');
      $phone.val('');
      _render()
    }
    
    function deletePerson(event){
    	var element=event.target.closest('tr');
    	var i=table.find('td').index(element);
    	people.splice(i, 1);
        _render();
    }

  })();