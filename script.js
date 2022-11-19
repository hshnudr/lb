async function getUsers() {
    let url = 'https://script.google.com/macros/s/AKfycbyTnMvAJSxE8Ie5G0lcv6AfrdvNHQ5CdMjo5ylWRxau_mufD-5--A4K2qprkn6P-aSY/exec';
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
    users = (users['data']);
	users.forEach(user => {
        let htmlSegment = `<tr>
                            <td>${user.placeholder} : </td>
                            <td ><a href="${user.link}">${user.link}</a> </td>
							<td>
								<div class="copy-text">
									<a href="${user.link}">
									<button>open</button>
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
