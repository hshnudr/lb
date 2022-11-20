async function getUsers() {
    let url = 'https://script.google.com/macros/s/AKfycbx7ClbYrdnlckhOp3CEvvkB9FbPlOBbeLOMJoO2XoggKE9YO_HCiwvS9B8EHX350Us/exec?action=read';
	//let url = 'https://script.google.com/macros/s/AKfycbxFjga3suJ8oWtUWyLA1l-ApcU4laVeOf4MwLRtkMNsFWMy05V0KL1X12Y5KgyX_rw/exec'
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users = (users['records']);
	users.forEach(user => {
        let htmlSegment = `<tr>
                            <td>${user.placeholder} : </td>
                            <td ><a href="${user.link}">${user.link}</a> </td>
							<td>
								<div class="copy-text">
									<a href="${user.link}">
									<button>Open</button>
									</a>
								</div>
							</td>
                          
                        </tr><br>`;

        html += htmlSegment;
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();
