
 let registe = () => {

	let jsonString = {
		//ユーザー名を取得する。
		'userName': $('input[name=userName]').val()	
	};

	//重複チェック
	$.ajax({
		type: 'POST',
		url: '/ecsite/admin/confirmuser',
		data: JSON.stringify(jsonString),
		contentType: 'application/json',
	})
	.then((result) => {
		if (result) {
			//重複あり
			alert(`入力したユーザー名は既に使用されています。`)
		} else {
			//重複無し
			alert(`重複なし`);
			$('form').attr('action' , '/ecsite/admin/registeUser');
			$('form').submit();
		}
	}, () => {
				alert('Error: ajax connection failed.');
	});	
};


	let login = (event) => {
			event.preventDefault();
			let jsonString = {
					'userName': $('input[name=userName]').val(),
					'password': $('input[name=password]').val()
			};
			$.ajax({
				type: 'POST',
				url: '/ecsite/api/login',
				data: JSON.stringify(jsonString),
				contentType: 'application/json',
				datatype: 'json',
				scriptCharset: 'utf-8'
			})
			.then((result) => {
				let user = JSON.parse(result);
				$('#welcome').text(` -- ようこそ! ${user.fullName} さん`);
				$('#hiddenUserId').val(user.id);
				$('input[name=userName]').val('');
				$('input[name=password]').val('');
			}, () => {
				console.error('Error: ajax connection failed.');
			}
		  );	
		};