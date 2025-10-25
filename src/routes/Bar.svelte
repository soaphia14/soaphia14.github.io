<!--
CS2112 is infecting my brain.
Sidebar (when screensize large enough) or fullscreen bar (when screensize small enough).
Displays name, email, picture, and other links.
-->
<script>
    import TextDiv from "./TextDiv.svelte";

	let isOpen = true;
	const toggleSidebar = () => (isOpen = !isOpen);
</script>


<div class = "h-screen border-5 py-10 md:w-96 flex flex-col justify-center items-center bg-[url(/flowers-gif.gif)] bg-cover relative bg-black">
    <div class="absolute inset-0 bg-black/70"></div>
    <div class = "z-10 justify-center items-center flex flex-col">
        <h1>Sophia Liu</h1>
        <p class ="text-white">Cornell CS Freshman</p>
        
        <img src = "/pfp.gif" alt="Profile" class="w-32 h-32 rounded-full my-4 border-2 border-white bg-white"/>


        <div class = "bg-divfill/50 border-divborder/20 border-2 rounded-lg p-4 m-4 flex flex-col text-notwhite justify-center items-center">
            <p class="text-soappink">Contact Me!</p>
            <p >sl3632 (at) cornell.edu</p>
            <a href="https://www.linkedin.com/in/sophia-liu-cs/" target="_blank" class="text-sky-300 hover:text-soappink transition-all">Linkedin</a>
            <a href="https://github.com/soaphia14" target="_blank" class="text-gray-400 hover:text-soappink transition-all">Github</a>

            
        </div>

    </div>
        


</div>
<!-- 
1. standardize h1 font across pages
2. make sidebar responsive


3. add links to sidebar
4. style sidebar
5. add hover effects to links
6. add active link highlighting
7. test on different screen sizes
8. optimize for performance
9. ensure accessibility compliance
10. document the component
11. integrate with routing
12. add animations for opening/closing sidebar
13. add user profile section
14. implement dark mode support
15. add unit tests
16. review and refactor code
17. deploy changes to staging
18. gather feedback from users
19. make final adjustments based on feedback
20. deploy to production
21. monitor for any issues post-deployment
22. plan for future enhancements
23. celebrate successful implementation!
24. update project documentation with new sidebar details
25. share learnings with the development team
26. archive old sidebar code for reference
27. schedule regular reviews for sidebar functionality and design
28. explore additional features like collapsible sections
29. consider user customization options for the sidebar
30. keep up with design trends for potential future updates
31. ensure compatibility with various browsers
32. test with screen readers for accessibility
33. optimize images used in the sidebar for faster loading
34. implement lazy loading for sidebar content if necessary
35. review CSS for potential improvements or simplifications
36. check for any console errors or warnings related to the sidebar
37. validate HTML structure for semantic correctness
38. ensure proper use of ARIA roles and attributes
39. test keyboard navigation within the sidebar
40. gather analytics on sidebar usage to inform future improvements
41. plan for periodic updates to keep the sidebar fresh and relevant
42. solicit user feedback specifically about the sidebar experience
43. consider localization options if the app supports multiple languages
44. evaluate the need for additional sidebar features based on user needs
45. stay informed about new Svelte features that could enhance the sidebar
46. participate in community discussions about sidebar design and functionality
47. contribute to open-source projects related to sidebar components
48. attend webinars or workshops on UI/UX design for sidebars
49. experiment with different layout options for the sidebar
50. continuously iterate on the sidebar design based on user feedback and analytics 
51. ensure the sidebar aligns with overall app branding and aesthetics
52. collaborate with designers for potential redesigns or enhancements
53. keep an eye on competitor apps for sidebar ideas and inspiration

lmao
-->
<!-- 
	<aside
		class={`${
			isOpen ? "w-64" : "w-16"
		} bg-white shadow-md transition-all duration-300 flex flex-col`}
	> -->