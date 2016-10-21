<?php
/**
 * Created by Code Monkeys LLC
 * http://www.codemonkeysllc.com
 * User: Spencer
 * Date: 10/20/2016
 * Time: 2:39 PM
 */
?>
<a-scene id="lobby-scene" class="scene">
    <!-- OUR ENVIRONMENT BACKGROUND -->
    <a-sky src="assets/img/scene-backgrounds/lobby2.jpg"></a-sky>

    <!-- SET OUR CAMERA POSITION -->
    <a-camera id="player" position="0 1.8 0">
        <!-- CREATE OUR RAYCAST CURSOR -->
        <a-cursor color="#ff0000"></a-cursor>
    </a-camera>

    <!-- CREATE A BOX -->
    <a-box class="collidable" color="#B76705" depth="2" height="2" width="4" position="-10 0.50 8">
        <!-- ANIMATE THE BOX 360 DEGREES ON CLICK -->
        <a-animation attribute="rotation" begin="click" to="0 360 0"></a-animation>
    </a-box>

    <!-- CREATE A SPHERE -->
    <a-sphere class="navpoint" nextscene="lobby" src="assets/img/earthmap1k.jpg" class="collidable" radius="3" position="11.3 -4 15">
        <!-- ANIMATE THE BOX 360 DEGREES ON CLICK -->
        <a-animation attribute="rotation" begin="click" to="0 360 0"></a-animation>
        </a-box>
</a-scene>
