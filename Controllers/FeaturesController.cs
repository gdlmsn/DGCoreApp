using AutoMapper;
using DGCoreApp.Controllers.Resources;
using DGCoreApp.Models;
using DGCoreApp.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DGCoreApp.Controllers
{
    public class FeaturesController : Controller
    {
        private readonly DGCoreAppDbContext context;
        private readonly IMapper mapper;

        public FeaturesController(DGCoreAppDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }

        [HttpGet("/api/features")]
        public async Task<IEnumerable<FeatureResource>> GetFeatures()
        {

            var features = await context.Features.ToListAsync();

            return mapper.Map<List<Feature>, List<FeatureResource>>(features);
        }
    }
}
