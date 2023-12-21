// Attach a click event handler to the button using jQuery
$(document).ready(function() {
    $('#generateStoryButton').click(function() {
        // Get user inputs using jQuery
        var name = $('#name').val();
        var character = $('#character').val();
        var adverb = $('#adverb').val();
        var adjective = $('#adjective').val();

        // Create the story title
        var storyTitle = `${name}'s Crazy Mad Libs Story!`;

        // Create the story content
        var storyContent = `${name} encountered a ${adjective} ${character}. `;
        storyContent += `Surprisingly, ${name} ${adverb} befriended the ${character}. `;
        storyContent += `Together, they embarked on a ${adjective} adventure, `;
        storyContent += `making ${name}'s heart race ${adverb}. `;

        // Additional sentences to meet the requirement
        storyContent += `The ${character} and ${name} shared ${adjective} moments together. `;
        storyContent += `In the end, ${name} and the ${character} became ${adjective} friends. `;

        // Replace all user-supplied words with styled class
        storyContent = storyContent.replaceAll(name, `<span class="userWord">${name}</span>`);
        storyContent = storyContent.replaceAll(character, `<span class="userWord">${character}</span>`);
        storyContent = storyContent.replaceAll(adverb, `<span class="userWord">${adverb}</span>`);
        storyContent = storyContent.replaceAll(adjective, `<span class="userWord">${adjective}</span>`);

        // Display the story title and content
        $('#storyContainer').css('display', 'block');
        $('#storyTitle').html(`<h2>${storyTitle}</h2>`);
        $('#madLibsStory').html(storyContent);

        // Scroll to the generated story
        $('#storyContainer').get(0).scrollIntoView({ behavior: 'smooth' });
    });
});
