    <script src="../js/jquery-3.2.1.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>

    <!-- После подключения jQuery, Popper и Bootstrap JS -->
    <?php
	for ($i = 1; $i <= 9; $i++) {
		for ($j = 1; $j <= $i; $j++) {
			?><?=$i?><?
		}
		?>
		<br>
	<?}

	?>    

    </body>
</html>