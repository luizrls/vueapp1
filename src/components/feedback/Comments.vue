<template>
    <div class="containter">
        <div class="Form">
            <input type="text" name="Autor" />
            <textarea name="Comentario" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="History">

        </div>
    </div> container
    
</template>

<script>
export default {
  name: 'Comments',
  props: {
    msg: String
  }
}
</script>
