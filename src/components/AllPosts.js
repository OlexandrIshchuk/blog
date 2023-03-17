import React from 'react';

const AllPosts = () => {
	const posts = [
		{
			id: 1,
			title: 'First',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula congue ligula a pretium. Quisque facilisis imperdiet neque, sit amet gravida risus tristique non. Vestibulum ex leo, cursus id aliquet sit amet, tempus id velit. Ut sagittis lorem quis posuere dictum. Phasellus quis ultrices lorem. Fusce ultrices ex ac laoreet cursus. Morbi accumsan lorem felis, ac tempus ligula eleifend vitae. Proin nunc tellus, scelerisque at arcu sed, vulputate convallis nisl. Aliquam eget pharetra erat, quis eleifend velit. Vestibulum quis tellus a neque venenatis laoreet vitae a dui. Praesent malesuada turpis elit, id condimentum tellus placerat nec. Phasellus vulputate dignissim ligula eu laoreet. Praesent vel egestas arcu, et fermentum ligula. Etiam id risus eget turpis gravida accumsan. Nulla egestas orci enim, ornare semper risus rhoncus laoreet.'
		},
		{
			id: 2,
			title: 'Second',
			text: 'Sed at porttitor magna, nec porta diam. Vestibulum vitae maximus eros. Fusce sit amet venenatis metus. Quisque metus mauris, mollis at tortor a, mattis iaculis sapien. Curabitur iaculis sapien ac commodo convallis. Pellentesque gravida vehicula viverra. Praesent ornare massa eu malesuada ornare. Nulla vitae augue tincidunt, volutpat neque pellentesque, iaculis odio. Proin cursus quam a magna ornare pellentesque. Pellentesque non eros id leo fringilla congue. Integer ultricies mollis mauris, a euismod ipsum condimentum at. Nunc aliquet velit mi, et blandit arcu mollis a. Nunc nunc odio, fermentum eu quam eget, scelerisque aliquet nisi.'
		},
		{
			id: 3,
			title: 'Third',
			text: 'Aliquam dictum, diam eu suscipit vestibulum, justo purus mollis neque, non elementum nulla nisl a ipsum. Aenean consequat commodo nunc, eget fringilla urna. Donec in purus sed ipsum venenatis posuere. Nulla malesuada accumsan tortor, nec efficitur metus commodo et. Cras sem nisi, imperdiet vel sollicitudin ut, lobortis eget sapien. Aliquam mi sapien, porttitor non eros dapibus, malesuada lacinia quam. Donec felis metus, scelerisque vel magna at, tristique laoreet metus. Nulla sit amet posuere ex. Quisque et mauris nec elit ultricies bibendum eget id ipsum. Praesent id dui fermentum nisl vehicula ullamcorper. Maecenas lorem augue, rutrum rhoncus aliquet non, dictum eu nisl. Sed condimentum ante quis velit tincidunt efficitur. Nulla facilisi.'
		}
	];

	return (
		<>
			{posts.map(post => (
				<div key={post.id} className="post mt-3">
					<h3 className="text-center">{post.title}</h3>
					{post.text}
				</div>
			))}
		</>
	);
};

export default AllPosts;
