<?php require ('navigation.php')?>

<div class="page_header" id="home">
    <div class="header_title">Contact-US</div>
    
</div>


<section class="contact">
    <div class="ctitle">
        <div class="heading">CONTACT-US</div>
        <label for="country">Select*</label>
        <select id="country" name="country">
            <option value="australia">Select a Type</option>
            <option value="australia">Rental</option>
            <option value="canada">Buyer</option>
        </select>
        <label for="fname">Name*</label>
        <input type="text" id="fname" name="firstname" placeholder="Name">
        <label for="mn">Mobile Number*</label>
        <input type="number" id="mn" name="firstname" placeholder="Mobile Number">
        <label for="email">Email (optional)</label>
        <input type="email" id="email" name="firstname" placeholder="Email">
        <label for="messege">Email (optional)</label>
        <input type="text" id="messege" name="firstname" placeholder="Messege">
        <a href="#" class="button" id="form">Submit</a>
    </div>


</section>

<?php require ('footer.php')?>