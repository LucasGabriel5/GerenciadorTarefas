using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;

namespace API.Controllers;

[Route("api/tarefa")]
[ApiController]
public class TarefaController : ControllerBase
{
    private readonly AppDataContext _context;

    public TarefaController(AppDataContext context) =>
        _context = context;

    // GET: api/tarefa/listar
    [HttpGet]
    [Route("listar")]
    public IActionResult Listar()
    {
        try
        {
            List<Tarefa> tarefas = _context.Tarefas.Include(x => x.Categoria).ToList();
            return Ok(tarefas);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // POST: api/tarefa/cadastrar
    [HttpPost]
    [Route("cadastrar")]
    public IActionResult Cadastrar([FromBody] Tarefa tarefa)
    {
        try
        {
            Categoria? categoria = _context.Categorias.Find(tarefa.CategoriaId);
            if (categoria == null)
            {
                return NotFound();
            }
            tarefa.Categoria = categoria;
            tarefa.Status = "Não iniciada";
            _context.Tarefas.Add(tarefa);
            _context.SaveChanges();
            return Created("", tarefa);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    //patch
    [HttpPatch]
    [Route("alterar")]
    public IActionResult Alterar([FromBody] Tarefa tarefa)
    {
        try
        {
            int id = tarefa.TarefaId;
            
            Tarefa tarefaBusca = _context.Tarefas.FirstOrDefault(e => e.TarefaId == id);
            if(tarefaBusca.Status == "Não iniciada"){
                tarefaBusca.Status = "Em andamento";
            }else if(tarefaBusca.Status == "Em andamento"){
                tarefaBusca.Status = "Concluída";
            }

            _context.Tarefas.Update(tarefaBusca);
            _context.SaveChanges();
            return Ok();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

        // GET: api/tarefa/naococluidas
    [HttpGet]
    [Route("naoconcluidas")]
    public IActionResult ListarNaoConcluidas()
    {
        try
        {
            List<Tarefa> tarefas = _context.Tarefas.Where(x => x.Status == "Não iniciada" || x.Status =="Em andamento").Include(x => x.Categoria).ToList();
            return Ok(tarefas);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

        // GET: api/tarefa/concluidas
    [HttpGet]
    [Route("concluidas")]
    public IActionResult ListarConcluidas()
    {
        try
        {
            List<Tarefa> tarefas = _context.Tarefas.Where(x => x.Status == "Concluída").Include(x => x.Categoria).ToList();
            return Ok(tarefas);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
