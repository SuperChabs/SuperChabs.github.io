async function loadChangelog() 
{
    const container = document.getElementById('changelog');
    const md = window.markdownit();

    try 
    {
        const response = await fetch('data/changelog.md');
        
        if (!response.ok) 
        {
            throw new Error('Failed to load file changelog.md');
        }

        const markdownText = await response.text();

        container.innerHTML += md.render(markdownText);
    } 
    catch (error) 
    {
        console.error('Error:', error);
        container.innerHTML += `<p style="color: red;">Failed to load changelog</p>`;
    }
}

document.addEventListener("DOMContentLoaded", loadChangelog);