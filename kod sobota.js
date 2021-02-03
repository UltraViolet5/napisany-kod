loadItems('http://swapi.dev/api/planets/')
// 'http://swapi.dev/api/planets/'
function loadItems(url)
		{
			$(document).ready(function() {
				// let nextNode = document.querySelector("#next");
				// nextNode.addEventListener("click", function (){ checkNext(url)});
				// let previousNode = document.querySelector("#previous");
				// previousNode.addEventListener("click", function (){ checkNext(url)});

				$.ajax({
					url: url,   // request url
					type : 'GET'
				})
					// success callback Function
					.done(function (data, status, xhr) {
						generateTable(data);
						checkNext(data.next);
						checkPrevious(data.previous);


					})
					.fail(function (xhr,status,error) {
						console.log("fail" + error);
					})
				});
		}


		function generateTable(result)
		{
			var c= [];
			c.push('<tr><td>Name</td>');
    		c.push('<td>Diameter</td>');
    		c.push('<td>Climate</td>');
    		c.push('<td>Terrain</td>');
    		c.push('<td>Water surface</td>');
    		c.push('<td>Population</td></tr>');
			console.log(result);
			$.each(result.results, function(i, item) {

				c.push("<tr><td>" + item.name + "</td>");
				c.push("<td>" + (new Intl.NumberFormat(('de-DE'), { maximumSignificantDigits: 3 }).format(item.diameter)) + "</td>");
				c.push("<td>" + item.climate + "</td>");
				c.push("<td>" + item.terrain + "</td>");
				c.push("<td>" + item.surface_water + "</td>");
				c.push("<td>" + (item.population != 'unknown'? new Intl.NumberFormat(('de-DE'), { maximumSignificantDigits: 3 }).format(item.population) : "") + "</td></tr>");

			});
			console.log(c);
			$('#planets_table').html(c.join(""));
		}

		function checkNext(data)
		{
			if ( data !== null )
			{
				let node = document.querySelector("#next");
				// node.setAttribute("click","");
				node.removeEventListener("click", function (){ loadItems(data)}, true);
				node.addEventListener("click", function (){ loadItems(data)}, true);
			}
		}
		function checkPrevious(data)
		{
			if ( data !== null )
			{
				let node = document.querySelector("#previous");
				node.removeEventListener("click", function (){ loadItems(data)}, true);
				node.addEventListener("click", function (){ loadItems(data)}, true);
			}
		}
