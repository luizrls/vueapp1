<template>
    <div class="containter">
        <h1>Comentários</h1>
        <hr>
        <div class="form-todo form-group">
            <p>
                <input type="text" name="Autor" class="form-control" />
            </p>
            <p>
                <textarea name="Comentario" id="" cols="30" rows="10" class="form-control"></textarea>
            </p>
            <button type="submit" class="btn btn-primary">Comentar</button>
        </div>
        <div class="list-group">
            <span class="comment_autror">Author: <strong>Luis</strong></span>
            <p>Mensagem</p>
            <div>
                <a href="#" title="Delete">Excluir</a>
            </div>
        </div>
    </div><!-- container -->
    
</template>

<script>
export default {
  name: 'Comments',
  props: {
    msg: String
  }
}
</script>
